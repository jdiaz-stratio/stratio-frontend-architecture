SRC_DIR = ".\src"
BIN_DIR = ".\bin"
CSS_DIR = "css"
COMPONENTS_DIR = "components"
OBJECTS_DIR = "objects"
THEME_DIR = "theme"
CSS_NAME = "stratio.ui.css"
TEST_DIR = ".\test"
TEST_SASS = "sass\test.js"
SASS_CACHE = ".sass-cache"

install:
	@npm install
	@npm install -g mocha
	@gem install sass-json-vars

sass:
	@echo ============================
	@echo = Removing Sass sass-cache =
	@echo ============================
	
	-rd /s $(SASS_CACHE)
	
	@echo ======================
	@echo = Removing old files =
	@echo ======================
	
	-rd /s $(BIN_DIR)\$(CSS_DIR)
	mkdir $(BIN_DIR)\$(CSS_DIR)

	@echo =====================
	@echo = Compiling Sass... =
	@echo =====================
	
	@sass $(SRC_DIR)\index.scss -r sass-json-vars $(BIN_DIR)\\$(CSS_DIR)\\$(CSS_NAME)
	
	@echo =====================
	@echo END

test-sass:
	@echo ================
	@echo = Testing Sass =
	@echo ================
	
	@mocha $(TEST_DIR)\\$(TEST_SASS)
	
	@echo =====================
	@echo END

lint-sass:
	

js:
	@echo ======================
	@echo = Removing old files =
	@echo ======================

	-rd /s $(BIN_DIR)\$(COMPONENTS_DIR)
	-rd /s $(BIN_DIR)\$(OBJECTS_DIR)
	-rd /s $(BIN_DIR)\$(THEME_DIR)

	@echo =========================
	@echo = Extracting components =
	@echo =========================

	xcopy $(SRC_DIR)\\$(COMPONENTS_DIR) $(BIN_DIR)\\$(COMPONENTS_DIR) /S /EXCLUDE:exclude-list.txt

	@echo ======================
	@echo = Extracting objects =
	@echo ======================

	xcopy $(SRC_DIR)\\$(OBJECTS_DIR) $(BIN_DIR)\\$(OBJECTS_DIR) /S /EXCLUDE:exclude-list.txt

	@echo =====================
	@echo = Extracting themes =
	@echo =====================

	xcopy $(SRC_DIR)\\$(THEME_DIR) $(BIN_DIR)\\$(THEME_DIR) /S /EXCLUDE:exclude-list.txt

build: sass js
