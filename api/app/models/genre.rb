class Genre < ApplicationRecord
  varidates :name, presence: true, length: { maximum: 10}
end
