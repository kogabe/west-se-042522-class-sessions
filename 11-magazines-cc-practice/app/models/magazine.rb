class Magazine < ActiveRecord::Base

    def self.most_popular
        # arr = Subscription.pluck(:magazine_id)
        # max_id = arr.max_by { |id| arr.count(id) }
        # self.find(max_id)
        # =======
        # self.all.max{|a, b| a.subscriptions.length <=> b.subscriptions.length}
        self.all.max_by{|mag| mag.subscriptions.length}
    end

    has_many :subscriptions
    has_many :readers, through: :subscriptions

    def email_list
        # self.readers.map(&:email).join(';')
        self.readers.pluck(:email).join(';')
    end

end