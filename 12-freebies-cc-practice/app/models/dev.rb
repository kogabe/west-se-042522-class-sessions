class Dev < ActiveRecord::Base

    def self.dev_with_highest_value_freebies # not in deliverables
        self.all.max_by {|dev| dev.freebies.sum(:value)}
    end

    def self.total_freebie_value_by_dev # not in deliverables
        self.all.map{|dev| "#{dev.name} has a total value of #{dev.total_freebie_value}"}
    end

    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        # self.freebies.pluck(:item_name).include?(item_name)
        # self.freebies.any? {|f| f.item_name == item_name}
        # item = self.freebies.find_by(item_name: item_name)
        # item ? true : false
        !!self.freebies.find_by(item_name: item_name)
    end

    def give_away(dev, freebie)
        # if received_one?(freebie.item_name) # this one is not totally secure
        #     freebie.update(dev: dev)
        # else
        #     "That's stealing!!!"
        # end
        if freebie.dev == self
            freebie.update(dev: dev)
            self.reload
            dev.reload
        else
            "That's stealing!!!"
        end
        # freebie.update(dev: dev) unless freebie.dev != self
    end

    def total_freebie_value # not in deliverables
        self.freebies.sum(:value)
    end

end
