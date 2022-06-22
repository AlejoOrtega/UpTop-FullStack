class Plan < ApplicationRecord
    has_many :subscriptions
    has_many :users, through: :subscriptions
    has_many :courses

    validates :title, :price, presence: true
    validates :description, length: {minimum: 30}
    validates :price, numericality: { greater_than: -0.1 }
end
