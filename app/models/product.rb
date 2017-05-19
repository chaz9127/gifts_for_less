class Product < ApplicationRecord
  has_attached_file :image,
    default_url: '',
    path: "images/products/:style/:basename",
    url: "/image/products/:style/:basename"
  acts_as_taggable_on :holiday, :genre

  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
