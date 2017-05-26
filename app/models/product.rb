class Product < ApplicationRecord
  has_attached_file :image,
    default_url: '',
    path: "images/products/:style/:basename",
    url: "/image/products/:style/:basename"
  acts_as_taggable_on :holiday, :genre

  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def serialized_hash
    {
      name: name,
      description: description,
      affiliate_link: affiliate_link,
      price: price,
      holiday_tags: holidays,
      genre_tags: genres,
      image_url: image.url,
      created_at: created_at,
      updated_at: updated_at
    }
  end

end
