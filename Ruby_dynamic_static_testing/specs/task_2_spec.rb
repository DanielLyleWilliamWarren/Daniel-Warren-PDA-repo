require 'minitest/autorun'
require_relative '../task_2.rb'
# require_relative '../card.rb'

class TestCard < Minitest::Test

def setup
@card = Card.new("Spades", 1)
@card1= Card.new("Hearts", 9)
@card2= Card.new("Diamonds", 10)
@cards = [@card, @card1, @card2]
end

def test_check_for_ace
assert_equal(true, Card.check_for_ace(@card))
end

def test_highest_card
assert_equal(@card2, Card.highest_card(@card1,@card2))
end

def test_cards_total
  assert_equal("You have a total of 20", Card.cards_total(@cards))
end

end
