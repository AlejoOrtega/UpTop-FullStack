class User < ApplicationRecord
    has_secure_password
    has_many :subscriptions
    has_many :plans, through: :subscriptions
    has_many :courses, through: :plans

    validates :username, presence: true, length: {minimum: 5}, uniqueness: true
end
