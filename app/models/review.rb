class Review < ApplicationRecord
    validates :rating, :trail_date, :user_id, :trail_id, presence: true
    validates :rating, inclusion: { in: 1..5 }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :trail,
        foreign_key: :trail_id,
        class_name: :Trail
end
