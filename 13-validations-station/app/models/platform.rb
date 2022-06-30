class Platform < ApplicationRecord
  belongs_to :station
  has_many :assignments
  has_many :trains, through: :assignments

  validates :platform_num, numericality: {
    only_integer: true,
    in: 1..20
  },
  uniqueness: {scope: :station}
end
