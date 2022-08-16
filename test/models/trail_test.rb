# == Schema Information
#
# Table name: trails
#
#  id               :bigint           not null, primary key
#  name             :string           not null
#  longitude        :float            not null
#  latitude         :float            not null
#  length           :float            not null
#  difficulty_level :string           not null
#  elevation_gain   :integer          not null
#  route_type       :string           not null
#  estimated_time   :string           not null
#  description      :text             not null
#  country          :string           not null
#  city             :string           not null
#  park_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class TrailTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
