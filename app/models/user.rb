class User < ApplicationRecord
    has_secure_password
    has_many :subscriptions, dependent: :delete_all
    has_many :plans, through: :subscriptions
    has_many :courses, through: :plans

    validates :username, presence: true, length: {minimum: 5}, uniqueness: true
    validates :email, presence: true, uniqueness: true

    validates :name , presence: true
    validates :last_name, presence: true
    

    def self.getBlackList
        users = User.where(banned: true)
    end

    def self.getWhiteList
        users = User.where(banned: false)
    end
end
