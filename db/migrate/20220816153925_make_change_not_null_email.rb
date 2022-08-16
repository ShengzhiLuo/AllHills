class MakeChangeNotNullEmail < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
