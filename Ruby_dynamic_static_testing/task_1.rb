# ### Testing task 1:
#
# # Carry out static testing on the code below.
# # Comment on any errors that you see below.
# ```ruby

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    # def self.check_for_ace
    if card.value = 1
  # if card.value == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # def self.highest_card(card1, card2)
  if card1.value > card2.value
    return card1.name
    # return card1 // no variable called 'name'
  else
    # return card2
  end
end
# end <--- this 'end' is redundant

def self.cards_total(card)
  total
  # total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
  # return "You have a total of #{total}" //return should be outside the for loop
end
