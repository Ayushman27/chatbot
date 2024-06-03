while True:
  user_input = input("You: ")
  if user_input.lower() == "quit":
    break
  chat = model.start_chat(history=[]) # create chat object here
  bot_response = generate_response(user_input, chat) # pass chat to function
  print("Bot:", bot_response)