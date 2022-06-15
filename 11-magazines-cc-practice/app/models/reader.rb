class Reader < ActiveRecord::Base

    has_many :subscriptions
    has_many :magazines, through: :subscriptions

    def subscribe(magazine, price)
        # Subscription.create(reader: self, magazine: magazine, price: price)
        self.subscriptions.create(magazine: magazine, price: price)
    end

    def total_subscription_price
        self.subscriptions.sum(:price)
    end

    def cancel_subscription(magazine)
        self.subscriptions.where(magazine: magazine).destroy_all
        # self.subscriptions.find_by(magazine: magazine).destroy
    end

    
  
end