class Role < ActiveRecord::Base

    has_many :auditions

    # def auditions
    #     Audition.all.select {|a| a.role_id == self}
    # end

    def actors
        # self.auditions.map{ |audition| audition.actor }
        # self.auditions.map(&:actor)
        self.auditions.pluck(:actor)
    end

    def locations
        self.auditions.pluck(:location)
    end

    def lead
        # returns first instance of audition hired for this role OR 'no actor hired...'
        #  lead = self.auditions.find{|audition| audition.hired } # AR method + Ruby method
        lead = self.auditions.find_by(hired: true) # all AR methods
        lead ? lead : 'No actor has been hired for this role.'
    end

    def understudy
         # returns second instance of audition hired for this role OR 'no actor hired...'
        #  hireds = self.auditions.filter{|aud| aud.hired}
        #  hireds.second
        # hireds = Audition.where(hired: true, role: self) # AR .where also returns an array and can match multiple conditions
        # understudy = hireds[1]
        understudy = self.auditions.where(hired: true).second
        understudy ? understudy : 'No actor has been hired as understudy for this role.'
    
    end

end