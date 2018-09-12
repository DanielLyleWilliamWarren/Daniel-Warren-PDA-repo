class Card
  attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit
    @value = value
  end

  # def checkforAce(card)
  def self.check_for_ace(card)
    # if card.value == 1
    if card.value == 1
      return true
    else
      return false
    end
  end

  # dif highest_card(card1 card2)
  def self.highest_card(card1, card2)
    # if card1.value > card2.value
    if card1.value >= card2.value
      return card1
      # return card1
    else
      return card2
    end
  end
  # end
  #
  def self.cards_total(cards)
    # total
    total = 0
    for card in cards
      total += card.value
      # return "You have a total of" + total
    end
    return "You have a total of #{total}"
  end

end
