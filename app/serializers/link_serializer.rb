class LinkSerializer < ActiveModel::Serializer
  attributes :id, :title, :link_url, :course_id
end
