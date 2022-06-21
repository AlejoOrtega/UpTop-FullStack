class AddPlanIdToCourses < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :plan_id, :integer
  end
end
