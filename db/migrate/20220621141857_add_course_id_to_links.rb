class AddCourseIdToLinks < ActiveRecord::Migration[7.0]
  def change
    add_column :links, :course_id, :integer
  end
end
