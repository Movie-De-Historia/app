class Review < ApplicationRecord
  belongs_to :user
  has_many :log
  has_many :message
  validates :movie_title, presence: true, length:{ maximum: 30 }
  validates :head_text, presence: true, length: { maximum: 30 }
  validates :comment, presence: true, length: { maximum: 50 }
  validates :spoiler, inclusion: { in: [true, false] }
end
