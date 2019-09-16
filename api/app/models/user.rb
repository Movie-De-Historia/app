class User < ApplicationRecord
  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }
  validates :email, presence: true, uniqueness: true,
            uniqueness: { case_sensitive: false }
  validates :name, presence: true, length:{ maximum: 20}
end
