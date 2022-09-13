# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_12_171748) do
  create_table "feedback_comments", force: :cascade do |t|
    t.string "content"
    t.string "text"
    t.string "feedback_id"
    t.string "integer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "feedbacks", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.string "category"
    t.integer "likes"
    t.integer "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
  end

end
