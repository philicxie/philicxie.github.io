import io
import os
import os.path

rootdir = os.getcwd()+'/blogs'
print rootdir

for parent, dirnames, filenames in os.walk(rootdir):
    # for dirname in dirnames:
    #     print parent
    #     print dirname

    for filename in filenames:
        print parent
        print filename
