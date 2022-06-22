class CourseSerializer < ActiveModel::Serializer
  attributes :title, :description, :image_url, :links

  def links
    object.links.map do |link|
      {
        title: link.title,
        link_url: link.link_url,
      }
    end
  end
end
