class ChangeGenreAndHolidayInProducts < ActiveRecord::Migration[5.0]
  def change
    rename_column :products, :genre, :genres
    rename_column :products, :holiday, :holidays
  end
end
