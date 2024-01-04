from datetime import datetime

class DateUtil:
  @staticmethod
  def get_formatted_today();
    data_today = datetime.now()
    formatted_date = date_today.strftime('%Y-%m-%d')
    return formatted_date


print(DatteUtil.get_formatted_today)

class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

class Rectangle:
  def __init__(self, origin, width, height):
    self.origin = origin
    self.width = width
    self.height = height

  def getArea(self):
    return self.width * self.height

  def end_points(self):
    top_right = self.origin.x + self.width
    bottom_left = self.origin.y + self.height
    print('Starting Point (X): ' + str(self.origin.x))
    print('Starting Point (Y): ' + str(self.origin.y))
    print('End Point X-Axix (Top Right): ' + str(top_right))
    print('End POint Y-Axix (Bottom Left): ' + str(bottom_left))


