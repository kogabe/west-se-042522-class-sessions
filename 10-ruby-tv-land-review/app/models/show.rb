class Show < ActiveRecord::Base

    has_many :characters
    has_many :actors, through: :characters
    belongs_to :network

    def actors_list
        self.actors.map(&:full_name)
        # self.actors.pluck(:full_name) # doesn't work b/c :full_name isn't a column
    end

    def self.list_names # this falls outside scope of deliverables
        self.pluck(:name, :genre) # just wanted to add an example that uses .pluck
    end
  
end