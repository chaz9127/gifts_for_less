ActiveAdmin.register Product do
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
    attributes_table do
      row :name
      row :description
      row :affiliate_link
      row :price
      row :genres
      row :holidays
      row :image do
        tag("img", src: product.image.url)
      end
    end
  end

end
