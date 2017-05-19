class Product < ApplicationRecord
  has_attached_file :image
  acts_as_taggable_on :holiday, :genre

end
