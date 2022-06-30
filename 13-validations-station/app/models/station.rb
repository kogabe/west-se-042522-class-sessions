class Station < ApplicationRecord

    has_many :platforms
    validates :name, uniqueness: true,
        presence: true,
        length: {minimum: 3}

end
