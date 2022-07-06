class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :links, :plan_id

  def links
    object.links.map do |link|
      {
        id: link.id,
        title: link.title,
        link_url: link.link_url,
        course_id: link.course_id,
      }
    end
  end
end
