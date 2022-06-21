class Course < ApplicationRecord
    has_many :links
    belongs_to :plan
    validates :title, :description, presence: true
end
