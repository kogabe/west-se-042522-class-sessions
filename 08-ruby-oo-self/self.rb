require("pry")

class FunnyBots
    attr_accessor :name, :quotes
  
    @@bots = []
  
    def initialize(name, quotes)
      @name = name
      @quotes = quotes
      @@bots << self
    end
  
    def random_quote
      self.quotes.sample
    end
  
    def self.bots
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
  
    def tire_size
      self.tire.to_f
    end

    def tire_size=(size)
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