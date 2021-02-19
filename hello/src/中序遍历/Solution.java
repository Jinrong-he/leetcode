package 中序遍历;

import java.util.ArrayList;
import java.util.List;

public class Solution {
    private void inorderHelper(TreeNode root, List<Integer> res){
        if(root == null)return;
        inorderHelper(root.left,res);
        res.add(root.val);
        inorderHelper(root.right,res);

    }
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        inorderHelper(root,res);
        return res;

}
}
