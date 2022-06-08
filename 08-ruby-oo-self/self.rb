require("pry")

class FunnyBots
    attr_accessor :name, :quotes
  
    @@bots = []
  
    def initialize(name, quotes)
      @name = name
      @quotes = quotes
      @@bots << self
    end
  
    def random_quote # an instance method looks like a regular method definition
      self.quotes.sample # self always gets its reference from the context in which it appears
      # here, it is in an instance method, so self refers to an instance of FunnyBots
    end
  
    def self.bots # a class method is prefixed by self.
        # the enclosing context of self here is the class FunnyBots, so self refers to the class itself
      @@bots
    end
  end
  
  quotes = [
    'Q: How did the programmer die in the shower? A: He read the shampoo bottle instructions: Lather. Rinse. Repeat.',
    "A UI is like a joke. If you have to explain it, it's not good.",
    'Q: How many programmers does it take to change a light bulb? A: None – It’s a hardware problem.'
  ]
  quotes2 = [
      "No matter where you go, there you are."
  ]
  archer = FunnyBots.new('Archer', quotes)
  homer = FunnyBots.new('Homer', quotes2)

  # ==============================
  # BICYCLE Class
  # ==============================

  class Bicycle

    def self.bikes
        @@bikes
    end

    def self.styles # @@bikes is a single source of truth which already contains styles
        # @@bikes.map{|bike| bike.style } 
        @@bikes.map(&:style) # does the same as above using a proc
    end

    @@bikes = []
    # @@styles = [] # this way is valid, but not as safe or efficient as using @@bikes

    attr_accessor :tire
    attr_reader :style
  
    def initialize(tire, gears, style)
      @tire = tire
      @gears = gears
      @style = style
      @@bikes << self
    #   @@styles << style
    end
  
    def tire_size # a custom reader can allow us to apply some formatting rules
      self.tire.to_s # here, we'd like to be able to get the tire size as a string, but keep it as an integer in the original 
    end

    def tire_size=(size) # a custom writer can allow us to add some validation logic to user input
        self.tire=size.clamp(4..20)
    end
  
    def gears
      @gears
    end

  end
  
  mongoose = Bicycle.new(4, 10, 'BMX')
  huffy = Bicycle.new(10, 3, 'Huffy')

  binding.pry
  0