class Train < ApplicationRecord
    has_many :assignments
    has_many :platforms, through: :assignments

    validates :origin, :destination, presence: true
    validates :origin, :destination, length: {in: 3..24}
    validates :service_type, inclusion: ["express", "local"]

end
