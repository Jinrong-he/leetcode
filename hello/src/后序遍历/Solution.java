package 后序遍历;


import java.util.ArrayList;
import java.util.List;

public class Solution {
    private void postorderHelper(TreeNode root, List<Integer> res){
        if(root == null)return;
        postorderHelper(root.left,res);
        postorderHelper(root.right,res);
        res.add(root.val);

    }
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        postorderHelper(root,res);
        return res;

    }
}
