class User < ApplicationRecord
    has_secure_password
    has_many :subscriptions
    has_many :plans, through: :subscriptions

    validates :username, presence: true, length: {minimum: 5}
    validates :password_digest, length:{ minimum: 8 }, 
    validates_format_of :username, :with => /^[a-z]
end
