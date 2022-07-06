class ChangesToUsersTable < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email, :string
    add_column :users, :name, :string
    add_column :users, :last_name, :string
    add_column :users, :admin, :boolean, null: false, default: false
    add_column :users, :image_url, :string
    add_column :users, :banned, :boolean, null: false, default: false
  end
end
