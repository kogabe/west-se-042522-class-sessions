puts "Creating companies..."
c1=Company.create(name: "Google", founding_year: 1998)
c2=Company.create(name: "Facebook", founding_year: 2004)
c3=Company.create(name: "Dunder Mifflin", founding_year: 2002)
c4=Company.create(name: "Enron", founding_year: 1995)

puts "Creating devs..."
d1=Dev.create(name: "Rick")
d2=Dev.create(name: "Morty")
d3=Dev.create(name: "Mr. Meseeks")
d4=Dev.create(name: "Gazorpazop")

puts "Creating freebies..."

# ***************************************************************
# * TODO: create freebies! Remember, a freebie belongs to a dev *
# * and a freebie belongs to a company.                         *
# ***************************************************************
# Create freebies Here

# Freebie.create(item_name: "water bottle", value: 2, dev_id: Dev.first.id , company_id: Company.second.id)
# Freebie.create(item_name: "water bottle", value: 2, dev_id: d1.id , company_id: c1.id)
# Freebie.create(item_name: "sticker" , value: 4, dev_id: d2.id , company_id: c2.id)
# Freebie.create(item_name: "USB stick", value: 3, dev_id: d3.id , company_id: c3.id)
# Freebie.create(item_name: "bag", value: 7, dev_id: d4.id , company_id: c4.id)

items = ["water bottle", "sticker", "USB stick", "tote bag", "notebook"]
3.times do
    items.each {|item|
        # company_id = Company.ids.sample
        company = Company.all.sample
        dev = Dev.all.sample
        value = rand(2..12)
        Freebie.create(item_name: item, dev: dev, company: company, value: value)
    }
end

puts "Seeding done!"
