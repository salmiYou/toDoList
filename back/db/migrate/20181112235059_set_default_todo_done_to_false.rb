class SetDefaultTodoDoneToFalse < ActiveRecord::Migration[5.2]
  def change
    change_column_default :todos, :done, from: nil, to: false
  end
end
