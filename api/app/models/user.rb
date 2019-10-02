class User < ApplicationRecord
  has_secure_token
  has_secure_password

  validates :name, presence: true, length: { maximum: 10 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }

  validates :password, presence: true, length: { in: 1..75 }
end
