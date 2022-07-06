class UserSerializer < ActiveModel::Serializer
  attributes :username, :banned, :admin, :name, :last_name, :email
end
