### SnoozeSquad Makefile ###
TargetFile = SnoozeSquad.min.js

# Set the default make goal
.DEFAULT_GOAL = build

# Installs the neccesary dependencies to begin development.
# Currently linux only, but it's so simple you should be able to figure windows
# out easily.
setup:
	@echo [SnoozeSquad/Setup] Installing UglifyJS \(Harmony\)
	sudo npm install uglify-js-harmony --global

# The default make target. This minifies SnoozeSquad.js to SnoozeSquad.min.js.
build:
	cat HeaderComment.js >$(TargetFile)
	uglifyjs SnoozeSquad.js --mangle --compress --screw-ie8 >>$(TargetFile)
	@echo [SnoozeSquad/Build] Minified Snooze Squad to $(TargetFile)
	@echo '*** Build Complete ***'
