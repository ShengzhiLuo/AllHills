class AddEmailNotNull < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, null: false, :default => ''
    #Ex:- :default =>''
  end
end
