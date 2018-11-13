class TodoSerializer < ActiveModel::Serializer
  attributes :id, :label, :done
end
