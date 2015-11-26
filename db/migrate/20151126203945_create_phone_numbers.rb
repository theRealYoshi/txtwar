class CreatePhoneNumbers < ActiveRecord::Migration
  def change
    create_table :phone_numbers do |t|
      t.string :phone_number, null: false
      t.integer :delay_time, null: false

      t.timestamps null: false
    end

    add_index :phone_numbers, :phone_number
  end
end
