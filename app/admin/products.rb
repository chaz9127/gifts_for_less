ActiveAdmin.register Product do

  member_action :edit_add_tags do
    @product = Product.find(params['id'])
  end

  member_action :add_tags, method: :put do
    begin
      product = Product.find(params[:update_params][:id])
      holiday_tags = params[:update_params][:holiday]
      genre_tags = params[:update_params][:genre]

      product.holiday_list.add(holiday_tags, parse: true)
      product.genre_list.add(genre_tags, parse: true)

      product.save!

      redirect_to resource_path(params[:update_params][:id]), notice: "Tags successfuly added"
    rescue => exception
      redirect_to resource_path(params[:update_params][:id]), flash: { error: exception.to_s }
    end
  end

  controller do
    def permitted_params
      params.permit product: [:name, :description, :affiliate_link, :price, :image]
    end
  end

  index do
    id_column
    column :name
    column :description
    column :price
    column :created_at
    actions
  end

  filter :name
  filter :price
  filter :created_at

  form do |f|
    f.inputs "Product Details" do
      f.input :name
      f.input :description
      f.input :affiliate_link
      f.input :price
      f.input :image, as: :file
    end
    f.actions
  end

  show do |product|
    panel 'Add Tags' do
      div { link_to 'Add Tags', edit_add_tags_admin_product_path(product.id) }
    end

    attributes_table do
      row :name
      row :description
      row :affiliate_link
      row :price
      row :genres do
        product.genre_list.to_s
      end
      row :holidays do
        product.holiday_list.to_s
      end
      row :image do
        tag("img", src: product.image.url)
      end
    end
  end

end
