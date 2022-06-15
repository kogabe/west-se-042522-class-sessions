class Company < ActiveRecord::Base

    def self.oldest_company
        # pluck, sort, return first one
        # earliest = Company.pluck(:founding_year).sort.first
        # Company.find_by(founding_year: earliest)
        # ======
        # self.all.min_by{|company| company.founding_year}
        # self.all.min_by(&:founding_year) # use Ruby method min_by
        # =======
        # old = Company.minimum(:founding_year)
        # Company.find_by(founding_year: old)
        # ==========
        self.order(:founding_year).first # using AR methods
    end

    has_many :freebies
    has_many :devs, through: :freebies

    def give_freebie(dev, item_name, value)
        # Freebie.create(dev: dev, company: self, item_name: item_name, value: value)
        self.freebies.create(dev: dev, item_name: item_name, value: value)

    end

end
