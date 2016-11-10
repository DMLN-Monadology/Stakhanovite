class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.integer :list_id, null: false
      t.string :title, null: false
      t.text :description, default: ""
      t.integer :order, null: false

      t.timestamps
    end
  end
end
