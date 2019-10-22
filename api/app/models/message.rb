class Message < ApplicationRecord
  belongs_to :review
  validates :message, presence: true, length: { maximum: 50 }
end
