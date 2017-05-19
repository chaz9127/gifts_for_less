class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.string :affiliate_link
      t.integer :price
      t.string :holiday
      t.string :genre
      t.attachment :image

      t.timestamps
    end
  end
end
